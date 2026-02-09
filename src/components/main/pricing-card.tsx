import { Check } from 'lucide-react'

interface PricingCardProps {
	planName: string
	planLabel: string
	price: string
	features: string[]
	highlighted?: boolean
	checkoutUrl: string
}

export function PricingCard({
	planName,
	planLabel,
	price,
	features,
	highlighted = false,
	checkoutUrl
}: PricingCardProps) {
	return (
		<div
			className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
				highlighted
					? 'border-emerald-700 bg-emerald-800 text-stone-50 shadow-md'
					: 'border-stone-200 bg-white text-stone-800 shadow-sm'
			}`}
		>
			{highlighted && (
				<div className="absolute -top-3 left-1/2 -translate-x-1/2">
					<span className="rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-900">
						Popular
					</span>
				</div>
			)}

			<div className="mb-6">
				<h3 className="text-lg font-semibold">{planName}</h3>
				<p
					className={`text-sm font-medium ${highlighted ? 'text-stone-50/70' : 'text-emerald-700'}`}
				>
					{planLabel}
				</p>
			</div>

			<div className="mb-8">
				<span className="font-serif text-4xl tracking-tight">{price}</span>
				<span className={`ml-1 text-sm ${highlighted ? 'text-stone-50/60' : 'text-stone-500'}`}>
					pesos
				</span>
			</div>

			<div className="mb-8 flex-1">
				<p
					className={`mb-4 text-xs font-semibold uppercase tracking-wider ${
						highlighted ? 'text-stone-50/60' : 'text-stone-500'
					}`}
				>
					Incluye
				</p>
				<ul className="space-y-3">
					{features.map((feature) => (
						<li key={feature} className="flex items-start gap-3">
							<Check
								className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
									highlighted ? 'text-emerald-300' : 'text-emerald-700'
								}`}
							/>
							<span className="text-sm leading-relaxed">{feature}</span>
						</li>
					))}
				</ul>
			</div>

			{checkoutUrl ? (
				<a
					href={checkoutUrl}
					target="_blank"
					rel="noopener noreferrer"
					className={`inline-block w-full rounded-xl py-3 text-center text-sm font-semibold tracking-wide transition-all duration-200 ${
						highlighted
							? 'bg-stone-50 text-emerald-800 hover:bg-stone-100'
							: 'bg-emerald-800 text-stone-50 hover:bg-emerald-700'
					}`}
				>
					Elegir Plan
				</a>
			) : (
				<button
					onClick={() => window.open(checkoutUrl, '_blank')}
					type="button"
					className={`w-full cursor-pointer rounded-xl py-3 text-sm font-semibold tracking-wide transition-all duration-200 ${
						highlighted
							? 'bg-stone-50 text-emerald-800 hover:bg-stone-100'
							: 'bg-emerald-800 text-stone-50 hover:bg-emerald-700'
					}`}
				>
					Elegir Plan
				</button>
			)}
		</div>
	)
}
