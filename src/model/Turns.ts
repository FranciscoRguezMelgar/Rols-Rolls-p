export class Turns{
	public players:Array<string>
	public active_player:number
	/**
	*	Pasa el turno al siguiente jugador de modo cíclico
	*/

	pass(){
		this.active_player = (++this.active_player)%this.players.length
	}
}