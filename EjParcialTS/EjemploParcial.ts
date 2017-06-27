interface Log{
	entrada:string;
	salida?:string;
	logear?():boolean;
}


class Usuario implements Log{
	entrada='asdsad';
	logear():boolean{
		return true;
	}
}