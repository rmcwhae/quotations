import { Quotation as QuotationType } from '../types/Quotation'

type Props = {
	quotation: QuotationType
}

export const Quotation = ({ quotation }: Props) => {
	const { content, start_page, end_page } = quotation
	let pageText = ''

	if (start_page && end_page) {
		pageText = `(${start_page}–${end_page})`
	} else if (start_page) {
		pageText = `(${start_page})`
	}

	return (
		<div className="quotation">
			{content} {pageText}
		</div>
	)
}
