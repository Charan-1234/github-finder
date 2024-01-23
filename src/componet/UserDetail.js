import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";

function UserDetail(props){
    //console.log(props);
     const { anything } = useParams();
     useEffect(()=>{
         props.getDetails(anything)
         props.getRepo(anything)

     },[])
     //console.log(props);
     
     return(
         <>
            <Link to="/" className="btn btn-dark">Back to Search</Link>
            Hireable:{props.user.hireable ? (<i className="fa fa-check text-success" />):(<i className="fa fa-times-circle text-danger" />)}
            <div className="card grid-2">
                <div className="all center">
                    <img src={props.user.avatar_url} className="round-img" style={{width:'150px'}}/>
                    <h1>{props.user.name}</h1>
                    <p>Location:{props.user.location}</p>

                </div>
                <div>
                    {props.user.bio&&(
                        <>
                            <h3>Bio</h3>
                            <p>{props.user.bio}</p>
                        </>
                    )}
                    <a href={props.user.html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                    <ul>
                        <li>
                            {props.user.company && (
                            <>
                            <strong>Company:{props.user.company}</strong>
                            </>) }
                        </li>
                        <li>
                            {props.user.blog && (
                            <>
                            <strong>Website:{props.user.blog}</strong>
                            </>) }
                        </li>
                        <li>
                            {props.user.login && (
                            <>
                            <strong>Username:{props.user.login}</strong>
                            </>) }
                        </li>
                        
                        
                    </ul>
                </div>
                

            </div>
            <div className="card text-center">
                    <div className="badge badge-primary">Followers:{props.user.followers}</div>
                    <div className="badge badge-success">Following:{props.user.following}</div>
                    <div className="badge badge-danger">Public Repos:{props.user.danger}</div>
                    <div className="badge badge-dark">Public Gists:{props.user.public_gists}</div>

            </div>
            <div >
                {props.repose.map((repo)=>{
                    return(
                        <div className="card">

                        <h2>
                            <a href={repo.html_url}>{repo.name}</a>
                        </h2>
                            
                        </div> 
                         
                    )

                }
                

                )}
            </div>
            
            
            
         </>
        

     )
}
export default UserDetail;