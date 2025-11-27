import Image from "next/image";
import style from "./standings.module.scss";
import Form from "../../icons/form";

export default function CardStandings({ item }: { item: any }) {
    return (
        <div className={`${style.container} ${item.clubname === "Liverpool" ? style.liverpool : ""}`}>
            <div className={style.ranking}>
                <h5 className={style.rankingNumber}>{item.standing}</h5>
                <div className={style.clubLogo}>
                    {item.logoImage !== "" ? (
                        <Image
                            src={item.logoImage}
                            alt={item.clubname}
                            width={40}
                            height={40}
                        />
                    ) : (<Image src="https://raw.githubusercontent.com/divclasssg/images/31b93daa87e490afe375cff7e9a5d23908d4949b/bls/lfc/logo_clubs_small/liverpoolfc_crest%201.svg" alt="liverpool" width={40} height={72.727} />)
}
                </div> 
            </div>
            <div className={style.clubInfo}>
                <h6 className={style.clubname}>{item.clubname}</h6>
                <span className={style.points}>{item.points} pts</span>
                <div className={style.form}>
                    {item.form.map((form: number, index: number) => {
                        return (<Form key={index} state={form} />)
                    })}
                </div>
            </div>
        </div>
    );
}
