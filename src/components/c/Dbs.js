import React from "react";
import StartFirebase from '../firConfig/fir'
import {ref , set ,get , update , remove , child} from "firebase/database";

export default class Dbs extends React.Component{
    constructor(props){
    super(props)

    this.state = {
        db:'',
        idm:'',
        mt:''
    }
    this.interface = this.interface.bind(this);
    }
    componentDidMount(){
        this.setState({
            db: StartFirebase()
        })
    }
    render(){
        return(
            <>
                <label>MOVIE ID</label>
                <input type="number" id="mid" value={this.state.id}  onChange={e =>{this.setState({idm:e.target.value})}}/>
                <div className="p-10 m-20"/>
                <label>media type</label>
            </>
        )
    }

    interface(event){
        const id = event.targe.id;
        if(id=='insertBtn'){
            this.insetData()
        }else if(id=='updateBtn'){

        }
    }

    getAllInputs(){
        return {
            idm:this.state.idm,
            mt: this.state.mt,
        }
    }

    insertData(){
                const db = this.state.db;
                const data = this.getAllInputs();

               set(ref , (db,'user/' + data.idm),{
                idm:data.idm,
                mt:data.mt,
               }) ;
    }
}