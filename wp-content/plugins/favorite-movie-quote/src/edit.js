import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {
	const { quote } = attributes;

	const onChangeQuote = ( newQuote ) => {
		setAttributes( { quote: newQuote } );
	};

	return (
		<div { ...useBlockProps() }>
			<TextControl
				label={ __( 'Enter your favorite movie quote' ) }
				value={ quote }
				onChange={ onChangeQuote }
			/>
		</div>
	);
}
