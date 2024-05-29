import React, { useEffect, useState } from "react";
import CommonApiService from "../../api/api-service";
import "./bankAccount.css"

const BankAccount = () => {
    const [account, setAccount] = useState({})

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

    const getAccountApi = async () => {
        // const response = await CommonApiService.getAccount()
        // console.log(response.data)
        // setAccount(response.data)
        try {
            await CommonApiService.getAccount()
                .then(res => {
                    setAccount(res.data)
                })
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getAccountApi()
    }, [])

    return (
        <div className="accountInfo">
            {Object.values(account).map((el) => (
                <div className="infoLayout" key={el.id}>
                    <div className="bankAccount">
                        <p className="reward">내가 보유한 리워드</p>
                        <p className="account">{inputPriceFormat(el.balance)} 원</p>
                    </div>
                    <p className="bankInfo">{el.bank} {el.accountNumber}</p>
                </div>
            ))}
        </div>
    )
}
export default BankAccount