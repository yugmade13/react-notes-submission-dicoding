import { showFormattedDate } from './../utils/index'

export default function Item(props) {
    return (
        <div className="item section-item">
            <h3 className='item-title'>{props.title}</h3>
            <p>{props.body}</p>
            <div className="item-details">
                <p>{showFormattedDate(props.createdAt)}</p>
                <div className="actions">
                    <button onClick={() => props.delete(props.data)}>Delete</button>
                    <button onClick={() => props.archived(props.data)}>
                        {props.data.archived ? 'Unarchived' : 'Archived' }
                    </button>
                </div>
            </div>
        </div>
    );
}