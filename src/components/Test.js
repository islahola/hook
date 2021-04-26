import React,{useState} from 'react'

const Test = () => {
    // angka
    const [angka,setAngka] = useState(0)
    // contoh string
    const [text,setText] = useState("")
    // contoh array
    const [array , setArray] = useState([
        {
            id : 1,
            title :"this array"
        }
    ])
    // contoh obyek
    const [obj ,setObj] = useState({
        name : "ini objek"
    })
    const tambah = () =>{
        setAngka( angka + 1)
    }
    const kurang =() =>{
        setAngka (angka - 1)
    }
    return (
        <div>
            <h1>Set Angka {angka}</h1>
            <button onClick={tambah}>Tambah</button>
            <button onClick={kurang}>Kurang</button>
        </div>
    )
}

export default Test
