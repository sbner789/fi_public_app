import React from "react";
import CommonApiService from "../../api/api-service";
import "./accountTitle.css"
import reset from "../../images/icon_refresh.svg"

const AccountTitle = () => {

    const resetAccountApi = async () => {
        try {
            await CommonApiService.resetAccount()
            .then(res => {
                console.log(res.data)
            })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="title">
            <p>출금</p>
            <div className="reset">
                <form onSubmit={resetAccountApi}>
                    <button type="submit">
                        <img src={reset} />
                    </button>
                </form>
            </div>
        </div>
    )
}
export default AccountTitle