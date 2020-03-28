class Occurrencies
{
    Occurrencies(
        id : string,
        title : string,
        description : string,
        value : string,
        ong_id : string
    )
    {
        this.id     = id;
        this.title    = title;
        this.description     = description;
        this.value = value;
        this.ong_id       = ong_id;
    }

    public id    ?: string;
    public title ?: string;
    public description ?: string;
    public value  ?: string;
    public ong_id ?: string;
}

export default Occurrencies.prototype;