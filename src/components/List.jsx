import Item from "./Item";

export default function List(props) {

    const filterArchive = props.data.filter((item) => item.archived === props.isArchived)

    return (
        <section className="section">
            <h2 className="section-title">{props.isArchived ? 'Archived' : 'Note Active'}</h2>
            {filterArchive.length ? (filterArchive.map((item) => (
                <Item key={item.id} {...item} delete={props.delete} archived={props.archived} data={item}/>
            ))) : (<h3 className="isempty">Data Kosong</h3>)}
        </section>
    );
}