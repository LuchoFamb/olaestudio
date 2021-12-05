import React from "react";
import Slider from "./Slider";
import { StudioEqText, StudioEqContainer } from "./StudioEquipment.elements";
import { Accordion } from "react-bootstrap";
import "./accordion.css";
import data from "./studiodata";

const StudioEquipment = () => {
	function mapCategory(cat) {
		return data[cat].map((elem) => (
			<StudioEqText key={elem}>{elem}</StudioEqText>
		));
	}

	return (
		<>
			<Slider />

			<StudioEqContainer>
				<Accordion flush bsPrefix="dark">
					<Accordion.Item eventKey="0" className="accordion">
						<Accordion.Header className="black-bg">
							Interfaces de Audio
						</Accordion.Header>
						<Accordion.Body>
							{mapCategory("Interfaces de Audio")}
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
				<Accordion>
					<Accordion.Item eventKey="1" className="accordion">
						<Accordion.Header>Auriculares</Accordion.Header>
						<Accordion.Body>{mapCategory("Auriculares")}</Accordion.Body>
					</Accordion.Item>
				</Accordion>
				<Accordion>
					<Accordion.Item eventKey="2" className="accordion">
						<Accordion.Header>Micrófonos</Accordion.Header>
						<Accordion.Body>{mapCategory("Micrófonos")}</Accordion.Body>
					</Accordion.Item>{" "}
				</Accordion>
				<Accordion>
					<Accordion.Item eventKey="3" className="accordion">
						<Accordion.Header>Guitarras</Accordion.Header>
						<Accordion.Body>{mapCategory("Guitarras")}</Accordion.Body>
					</Accordion.Item>
				</Accordion>
				<Accordion>
					<Accordion.Item eventKey="4" className="accordion">
						<Accordion.Header>Bajos</Accordion.Header>
						<Accordion.Body>{mapCategory("Bajos")}</Accordion.Body>
					</Accordion.Item>{" "}
				</Accordion>
				<Accordion>
					<Accordion.Item eventKey="5" className="accordion">
						<Accordion.Header>Misc</Accordion.Header>
						<Accordion.Body>{mapCategory("Misc")}</Accordion.Body>
					</Accordion.Item>{" "}
				</Accordion>
				<Accordion>
					<Accordion.Item eventKey="6" className="accordion">
						<Accordion.Header>Pedales</Accordion.Header>
						<Accordion.Body>{mapCategory("Pedales")}</Accordion.Body>
					</Accordion.Item>{" "}
				</Accordion>
				<Accordion>
					<Accordion.Item eventKey="7" className="accordion">
						<Accordion.Header>Amplificadores</Accordion.Header>
						<Accordion.Body>{mapCategory("Amplificadores")}</Accordion.Body>
					</Accordion.Item>
				</Accordion>
				<Accordion>
					<Accordion.Item eventKey="8" className="accordion">
						<Accordion.Header>DI</Accordion.Header>
						<Accordion.Body>{mapCategory("DI")}</Accordion.Body>
					</Accordion.Item>{" "}
				</Accordion>
				<Accordion>
					<Accordion.Item eventKey="9" className="accordion">
						<Accordion.Header>Controladores MIDI</Accordion.Header>
						<Accordion.Body>{mapCategory("Controladores MIDI")}</Accordion.Body>
					</Accordion.Item>{" "}
				</Accordion>
				<Accordion>
					<Accordion.Item eventKey="10" className="accordion">
						<Accordion.Header>Monitores</Accordion.Header>
						<Accordion.Body>{mapCategory("Monitores")}</Accordion.Body>
					</Accordion.Item>{" "}
				</Accordion>
				<Accordion>
					<Accordion.Item eventKey="11" className="accordion">
						<Accordion.Header>Otros</Accordion.Header>
						<Accordion.Body>{mapCategory("Otros")}</Accordion.Body>
					</Accordion.Item>
				</Accordion>

				{/* <StudioEqTitle>Interfaces de Audio</StudioEqTitle>
				{mapCategory("Interfaces de Audio")}
				<StudioEqTitle>Auriculares</StudioEqTitle>
				{mapCategory("Auriculares")}
				<StudioEqTitle>Microfonos</StudioEqTitle>
				{mapCategory("Micrófonos")}
				<StudioEqTitle>Guitarras</StudioEqTitle>
				{mapCategory("Guitarras")}
				<StudioEqTitle>Bajos</StudioEqTitle>
				{mapCategory("Bajos")}
				<StudioEqTitle>Mics</StudioEqTitle>
				{mapCategory("Misc")}
				<StudioEqTitle>Pedales</StudioEqTitle>
				{mapCategory("Pedales")}
				<StudioEqTitle>Amplificadores</StudioEqTitle>
				{mapCategory("Amplificadores")}
				<StudioEqTitle>DI</StudioEqTitle>
				{mapCategory("DI")}
				<StudioEqTitle>Controladores MIDI</StudioEqTitle>
				{mapCategory("Controladores MIDI")}
				<StudioEqTitle>Monitores</StudioEqTitle>
				{mapCategory("Monitores")}
				<StudioEqTitle>Otros</StudioEqTitle>
				{mapCategory("Otros")} */}
			</StudioEqContainer>
		</>
	);
};

export default StudioEquipment;
