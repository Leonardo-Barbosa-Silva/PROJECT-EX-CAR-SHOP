export default function ItemCart({ item, onClick }) {

    return (
        <div className="col-sm-3">
            <div class="card text-bg-info mb-3 mt-3">
                <div class="card-header">{item.name}</div>
                <div class="card-body" style={{ padding: 0 }}>
                    <img src={item.url} alt={item.name} style={{ width: '100%' }} />
                </div>
                <button 
                    className="btn btn-danger" style={{
                        width: '40px',
                        position: 'absolute',
                        bottom: '15px',
                        right: '15px'}}
                    onClick={onClick.bind(null, item)}>
                    <i className="fa fa-trash"/>
                </button>
            </div>
        </div>
    )
}