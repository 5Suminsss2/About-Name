import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Add() {
    return (
        <div>
            <Header />
            <section>
                <image>이미지</image>
                <div>
                    해당 이름이 존재하지 않습니다.
                    (이름)을 추가하시겠습니까?
                </div>
                <div>
                    <button>네!</button>
                    <Link to="/">아니요!</Link>
                </div>
            </section>
        </div>
    )
}

export default Add;