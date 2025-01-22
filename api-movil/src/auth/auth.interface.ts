export interface authinterface{
    id:number;
    Nombreusuario:string;
    Email:string;
    roles: string[];
    fotoPerfil:string

}


export interface AdminAuth{
    id:number;
    Email:string;
    roles: string[];
}