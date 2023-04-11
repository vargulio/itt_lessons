import "./Container.scss";

export default function Container(p) {

    return <div className="oap-container">
        {p.children}
    </div>

}