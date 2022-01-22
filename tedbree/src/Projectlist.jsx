import "./projectlist.css"

export default function Projectlist({title, id, active, setSelected}) {
    return (
        <li className={active ? "Projectlist active": "Projectlist" } onClick={()=> setSelected(id)}>

           {title}
            
        </li>
    )
}
