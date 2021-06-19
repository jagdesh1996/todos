import React from 'react';

function Footer2() {
	return (
		// (position: 'absolute'),
		<footer
			className="page-footer dark"
			// , left: '0', bottom: '0',
			style={{
				clear: 'both',
				position: 'static',
				bottom: 0,
				width: '100%',
				background: 'black',
				height: '4rem',
			}}>
			<div className="footer-copyright">
				<p
					style={{
						textAlign: 'center',
						paddingTop: '1.3rem',
						color: 'white',
						fontSize: '1.2rem',
						fontFamily: 'monospace',
					}}>
					Copyright © 2020 ASN. All Rigths Reserved
				</p>
			</div>
		</footer>
	);
}

export default Footer2;
