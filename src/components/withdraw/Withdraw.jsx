import React, { useEffect, useState } from "react";
import CommonApiService from "../../api/api-service";
import BankAccount from "../bankAccount/BankAccount";
import "./withdraw.css";
import AccountTitle from "../accountTitle/AccountTitle";

const WithDraw = () => {
    const [account, setAccount] = useState("");
    const [error, setError] = useState("");
    const [getAll, setGetAll] = useState("");
    
    const inputPriceFormat = (str) => {
        const comma = (str) => {
            str = String(str);
            return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")
        };
        const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };
    return comma(uncomma(str));
    }
    
    const WithDrawAccountApi = async () => {
        try {
            const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
            await CommonApiService.withdraw(Number(account.replace(reg, "")))
            .then(res => {
                console.log(res.data)
            })
        } catch (e) {
            console.log(e)
        }
    }

    const inputHandler = (e) => {
       setAccount(inputPriceFormat(e.target.value))
       if(account.length < 3) {
        setError("금액이 부족합니다.")
       } else {
        setError("")
       }
    }

    const getAllCount = async () => {
        try {
            await CommonApiService.getAccount()
                .then(res => {
                    console.log(Object.values(res.data).map((el) => el.balance))
                    setGetAll(Object.values(res.data).map((el) => el.balance))
                })
        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        getAllCount()
        console.log("hello",Number(account))
    }, [])


    return (
        <div className="withdrawContainer">
            <AccountTitle />
                <div className="withdrawLayout">
                    <div className="withdrawWrap">
                        <p>1,000원 단위로만 출금 가능해요</p>
                        <form onSubmit={WithDrawAccountApi}>
                            <input 
                                placeholder="금액 입력"
                                type="text"
                                value={account.length > 0 ? account+"원" : account}
                                onChange={inputHandler}
                            />
                        </form>
                        <div className="allWithdraw">
                            <div className={account.length >= 4 ? "disable" : "error"}>{error}</div>
                            <button onClick={() => setAccount(inputPriceFormat(getAll))} className={error.length > 0 ? "disable" : "allWithdrawBtn"}>전액 출금</button>
                        </div>
                    </div>    
                        <BankAccount /> 
                </div>
            <form onSubmit={WithDrawAccountApi}>    
                    <button className={account.length >= 4 ? "ctaBtn" : "ctaBtnNeg"} type="submit">출금하기</button>     
            </form>
        </div>
    )
}
export default WithDraw