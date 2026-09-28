import { useModalState } from "../js/components/ModalContext";

export default function RoomsTable({ ...props }) {
    const { openEditDrawer } = useModalState();

    const rooms = [
        { id: 1, sn: 'RM-101', name: 'Deluxe General Ward A',       capacity: 'Single', status: 'Available',   statusClass: 'status-available',   data: { roomName: 'Deluxe General Ward A (RM-101)',         roomType: 'Single Ward',   capacity: 1, dailyRate: '120.00', status: 'Available' } },
        { id: 2, sn: 'RM-102', name: 'Cardiology ICU Room 1',        capacity: 'Single', status: 'Occupied',    statusClass: 'status-occupied',    data: { roomName: 'Cardiology ICU Room 1 (RM-102)',         roomType: 'ICU',           capacity: 1, dailyRate: '450.00', status: 'Occupied' } },
        { id: 3, sn: 'RM-103', name: 'Pediatrics Care Suite',        capacity: 'Double', status: 'Available',   statusClass: 'status-available',   data: { roomName: 'Pediatrics Care Suite (RM-103)',         roomType: 'Double Ward',   capacity: 2, dailyRate: '180.00', status: 'Available' } },
        { id: 4, sn: 'RM-104', name: 'Post-Op Recovery Ward B',      capacity: 'Double', status: 'Occupied',    statusClass: 'status-occupied',    data: { roomName: 'Post-Op Recovery Ward B (RM-104)',       roomType: 'Double Ward',   capacity: 2, dailyRate: '200.00', status: 'Occupied' } },
        { id: 5, sn: 'RM-105', name: 'Orthopedic Rehabilitation Unit', capacity: 'Single', status: 'Unavailable', statusClass: 'status-unavailable', data: { roomName: 'Orthopedic Rehabilitation Unit (RM-105)', roomType: 'Single Ward', capacity: 1, dailyRate: '160.00', status: 'Unavailable (Maintenance)' } },
        { id: 6, sn: 'RM-106', name: 'Neurology Observation Room',   capacity: 'Single', status: 'Available',   statusClass: 'status-available',   data: { roomName: 'Neurology Observation Room (RM-106)',    roomType: 'Single Ward',   capacity: 1, dailyRate: '175.00', status: 'Available' } },
        { id: 7, sn: 'RM-107', name: 'Maternity & Infant Suite',     capacity: 'Double', status: 'Occupied',    statusClass: 'status-occupied',    data: { roomName: 'Maternity & Infant Suite (RM-107)',      roomType: 'VIP Suite',     capacity: 2, dailyRate: '320.00', status: 'Occupied' } },
        { id: 8, sn: 'RM-108', name: 'Emergency Isolation Room',     capacity: 'Single', status: 'Unavailable', statusClass: 'status-unavailable', data: { roomName: 'Emergency Isolation Room (RM-108)',      roomType: 'Emergency Bed', capacity: 1, dailyRate: '350.00', status: 'Unavailable (Maintenance)' } },
        { id: 9, sn: 'RM-201', name: 'General Patient Room 201',     capacity: 'Double', status: 'Available',   statusClass: 'status-available',   data: { roomName: 'General Patient Room 201 (RM-201)',      roomType: 'Double Ward',   capacity: 2, dailyRate: '140.00', status: 'Available' } },
        { id: 10, sn: 'RM-202', name: 'VIP Executive Recovery Suite', capacity: 'Single', status: 'Available',  statusClass: 'status-available',   data: { roomName: 'VIP Executive Recovery Suite (RM-202)', roomType: 'VIP Suite',     capacity: 1, dailyRate: '500.00', status: 'Available' } },
    ];

    return (
        <>
            <div className="appointments-main-card">
                <div className="appointments-table-wrap">
                    <table className="appointments-data-table">
                        <thead>
                            <tr>
                                <th className="checkbox-col">
                                    <input type="checkbox" className="table-checkbox" />
                                </th>
                                <th className="sortable-th id-col">
                                    <span>S/N</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Room Name</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Capacity</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th className="sortable-th">
                                    <span>Status</span>
                                    <i className="bi bi-arrow-down-up"></i>
                                </th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms.map((room) => (
                                <tr key={room.id}>
                                    <td>
                                        <input type="checkbox" className="table-checkbox" />
                                    </td>
                                    <td>
                                        <span className="room-name-txt">{room.id}</span>
                                    </td>
                                    <td>
                                        <div className="room-cell-info">
                                            <span className="room-name-txt">{room.name}</span>
                                            <span className="room-id-txt">{room.sn}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="room-capacity-badge">{room.capacity}</span>
                                    </td>
                                    <td>
                                        <span className={`appointment-status-pill ${room.statusClass}`}>{room.status}</span>
                                    </td>
                                    <td>
                                        <div className="appointment-row-actions">
                                            <button
                                                type="button"
                                                className="btn-action-reschedule"
                                                onClick={() => openEditDrawer(room.data, 'room')}
                                                title="Edit Room"
                                            >
                                                <i className="bi bi-pencil-square"></i>
                                                Edit
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="appointments-pagination-row">
                    <div className="appointments-pagination-info">
                        <span>Showing</span>
                        <select className="appointments-page-select" defaultValue="10">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                        <span>out of 48</span>
                    </div>

                    <div className="appointments-pagination-controls">
                        <button type="button" className="btn-appointments-step" title="Previous Page">
                            <i className="bi bi-chevron-left"></i>
                        </button>
                        <button type="button" className="btn-appointments-step active">1</button>
                        <button type="button" className="btn-appointments-step">2</button>
                        <button type="button" className="btn-appointments-step">3</button>
                        <span className="page-step-ellipsis">...</span>
                        <button type="button" className="btn-appointments-step">5</button>
                        <button type="button" className="btn-appointments-step" title="Next Page">
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}


