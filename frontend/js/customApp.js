function Persona(props){

	return (
		<div className="col-sm-4 wow animated zoomIn animation-delay-7">
			<div className="team-member">
				<img src={props.personPic} className="img-responsive img-circle" alt="" />
				<h4>{props.fullName}</h4>
				<p className="text-muted">{props.position}</p>
				<ul className="list-inline social-buttons">
					<li><a className="twitter" href={props.sm.twitter} ><i className="fa fa-twitter"></i></a>
					</li>
					<li><a className="facebook" href={props.sm.facebook} ><i className="fa fa-facebook"></i></a>
					</li>
					<li><a className="linkedin" href={props.sm.linkedin} ><i className="fa fa-linkedin"></i></a>
					</li>
				</ul>
			</div>
		</div>
	);
}