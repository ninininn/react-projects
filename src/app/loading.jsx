//! Loading UI
import '../styles/loading.css';

export default function Loading() {
    // You can add any UI inside Loading
    return (
        <div className='flex items-end gap-3'>
            <h1 className="loading-text">Loading</h1>
            <div className="loading">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>);
}