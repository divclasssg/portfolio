import Image from "next/image";

export default function CardStandings({ item }: { item: any }) {
    console.log(item);
    return (
        <div>
            <div>
                <h5>{item.standing}</h5>
                <div>
                    {item.logoImage !== "" ? (
                        <Image
                            src={item.logoImage}
                            alt={item.clubname}
                            width={40}
                            height={40}
                        />
                    ) : null}
                </div>
            </div>
            <div>
                <h6>{item.clubname}</h6>
                <span className="">{item.points} pts</span>
            </div>
        </div>
    );
}
