export default class User
{
    User(
        name  : string,
        email : string,
        whatsapp   : string,
        city  : string,
        uf    : string
    )
    {
        this.name     = name;
        this.email    = email;
        this.city     = city;
        this.whatsapp = whatsapp;
        this.uf       = uf;
    }

    public name  ?: string;
    public email ?: string;
    public whatsapp   ?: string;
    public city  ?: string;
    public uf    ?: string;
}