import Header from '../components/Header';

function Comment() {
    return (
        <div>
            <Header />
            <section>
                <div>이름 명</div>
                <div>
                    <div>코멘트</div>
                    <div>코멘트</div>
                    <div>코멘트</div>
                </div>
                <div>
                    <input placeholder="어떤 느낌인지 입력하세요!" />
                    <button>입력</button>
                </div>
            </section>
        </div>
    )
}

export default Comment;