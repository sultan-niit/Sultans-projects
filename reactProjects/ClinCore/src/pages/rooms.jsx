import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import ButtonComponents from "../components/ButtonComponents";
import RoomsTable from "../components/RoomsTable";
import PageFooter from "../components/PageFooter";
import { useModalState } from "../js/components/ModalContext";
import { FILTER_CONFIGS } from "../js/formSchemas";
import { fetchAllRooms, getStoredRooms } from "../api/room";

export default function Rooms() {
  const { openAddDrawer } = useModalState();
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const roomFilters = FILTER_CONFIGS.room;

  const loadRooms = async () => {
    setIsLoading(true);
    try {
      const fetched = await fetchAllRooms();
      setRooms(Array.isArray(fetched) ? fetched : getStoredRooms());
    } catch (error) {
      console.warn("Error loading rooms:", error?.message || error);
      setRooms(getStoredRooms());
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const initialFetch = window.setTimeout(loadRooms, 0);

    const onRoomChanged = async (event) => {
      const { record: updated, isDelete } = event?.detail || {};
      if (updated) {
        if (isDelete) {
          setRooms((prev) => prev.filter(
            (room) => String(room.roomId || room.room_id || room.id) !== String(updated.roomId || updated.room_id || updated.id)
          ));
          return;
        }
        setRooms((prev) => {
          const exists = prev.some((room) => String(room.roomId) === String(updated.roomId || updated.room_id));
          if (exists) {
            return prev.map((room) => (String(room.roomId) === String(updated.roomId || updated.room_id) ? { ...room, ...updated } : room));
          }
          return [updated, ...prev];
        });
        return;
      }
      await loadRooms();
    };

    window.addEventListener("clincore:room-changed", onRoomChanged);
    return () => {
      window.clearTimeout(initialFetch);
      window.removeEventListener("clincore:room-changed", onRoomChanged);
    };
  }, []);

  return <div className="dashboard-wrapper">
      <Sidebar />
      <div className="content-wrapper">
        <TopHeader />
        <div className="main-content">
          <div className="appointments-toolbar">
            <div className="appointments-filter-tabs">
              <button type="button" className="tab-filter-btn active">All ({rooms.length})</button>
              <button type="button" className="tab-filter-btn">Available ({rooms.filter((room) => room.status === "Available").length})</button>
              <button type="button" className="tab-filter-btn">Occupied ({rooms.filter((room) => room.status === "Occupied").length})</button>
              <button type="button" className="tab-filter-btn">Unavailable ({rooms.filter((room) => room.status === "Unavailable").length})</button>
            </div>

            <div className="appointments-actions-right">
              <SearchBar placeHolder="Search room name, ID, type..." />
              <FilterDropdown icon={roomFilters.capacity.icon} label={roomFilters.capacity.label} options={roomFilters.capacity.options} className="appointments-date-pill" />
              <ButtonComponents className="btn-add-appointment-action" icon="bi-plus-lg" title="Add Room" onClick={() => openAddDrawer('room')} />
            </div>
          </div>

          <RoomsTable rooms={rooms} isLoading={isLoading} />
          <PageFooter />
        </div>
      </div>
    </div>;
}
