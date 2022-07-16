import React from 'react';
import Admonition from '@theme/Admonition';

export default function ClosedBeta() {
	return (
		<div>
			<Admonition type="caution">
				<p>Niomon is currently in closed beta. If you don't have access, you can request it using
				the <a href="https://niomon.io/signup" target="_blank">beta sign-up form</a>.</p>
			</Admonition>
		</div>
	);
}