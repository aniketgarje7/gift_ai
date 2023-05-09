
import { useSelector, useDispatch } from "react-redux";
import { selectResult, selectSearchChat } from "@/store/slices/searchSlice";
import { useEffect, useState } from "react";
import SeeMore from 'component/SeeMore';


const ChatSection = ()=>{
    const dispatch = useDispatch();
    const result = useSelector(selectResult);
    const searchChat = useSelector(selectSearchChat);

    useEffect(() => {
        var objDiv = document.getElementById("scroll");
        if (!objDiv) return;
        objDiv.scrollTop = objDiv.scrollHeight;
    }, [searchChat])
    return (
        <div className="card-text search-input position-relative p-1 " id='scroll'>
            {searchChat.length > 1 && searchChat.map((chat, key) => key !== 0 && <div key={key}>{chat.role === 'user' ?
                <div className="text-start profile-1-text row position-relative" key={key}>
                    <span className="image-1">
                    <img src="./assets/profile1.png" alt="profile" className="image-1-image" />
                    </span>
                    <span className=" profile-1-span col-8 col-sm-10 col-md-7">{chat.content}</span>
                </div>

                :
                <div className="text-end row justify-content-end position-relative profile-2-text" key={key}>
                    <span
                        className="col-sm-10 col-8 col-md-7 profile-2-span text-start
                         "
                    >
                        {" "}
                        <SeeMore message={chat.content} />
                    </span>
                    <span className="image-2">
                    <img src="./assets/profile2.png" alt="profile" className="image-2-image" />
                    </span>
                </div>
            }</div>)}
        </div>
    )
}

export default ChatSection;