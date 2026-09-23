export default function TabFilter({ ...props }) {
    return (
        <>
            <div className="appointments-filter-tabs">
                <button type="button" className="tab-filter-btn active">All (128)</button>
                <button type="button" className="tab-filter-btn">Confirmed (98)</button>
                <button type="button" className="tab-filter-btn">Pending (18)</button>
                <button type="button" className="tab-filter-btn">Cancelled (12)</button>
            </div>
        </>
    );
}
