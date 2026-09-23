export default function SearchBar({ ...props }) {
    return (
        <>
            {/* Search bar container — className comes from parent (e.g. appointments-search-bar, patients-search-bar) */}
            <div className={props.className || "appointments-search-bar"}>
                <i className="bi bi-search"></i>
                <input
                    type="text"
                    placeholder={props.placeHolder}
                />
            </div>
        </>
    );
}
