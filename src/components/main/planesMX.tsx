import { useState } from 'react'
import { PricingCard } from './pricing-card'
import { User, Users } from 'lucide-react'

const personalPlans = [
	{
		planName: 'Terapia Individual',
		planLabel: 'Plan Lite',
		price: '$800',
		features: ['Una sesion individual de terapia'],
		highlighted: false,
		checkoutUrl: 'https://buy.stripe.com/5kA16h5Kj4N90a4fZe'
	},
	{
		planName: 'Terapia Individual',
		planLabel: 'Plan Plus',
		price: '$2,000',
		features: [
			'3 sesiones individuales de terapia',
			'Acompanamiento de mensajeria durante el proceso',
			'Una llamada de emergencia de 15 minutos'
		],
		highlighted: true,
		checkoutUrl: 'https://buy.stripe.com/9AQ2alb4DbbxbSM00k'
	},
	{
		planName: 'Terapia Individual',
		planLabel: 'Plan Total',
		price: '$6,000',
		features: [
			'10 sesiones individuales de terapia',
			'Acompanamiento de mensajeria durante el proceso',
			'Dos llamadas de emergencia de 15 minutos'
		],
		highlighted: false,
		checkoutUrl: 'https://buy.stripe.com/9B67sL7eJ1LnaGdenXe7m0C'
	}
]

const couplesPlans = [
	{
		planName: 'Terapia de Pareja',
		planLabel: 'Plan Basico',
		price: '$1,200',
		features: ['Una sesion de terapia de pareja'],
		highlighted: false,
		checkoutUrl: 'https://buy.stripe.com/6oU3cv7eJgGhcOlcfPe7m0D '
	},
	{
		planName: 'Terapia de Pareja',
		planLabel: 'Plan Integral',
		price: '$3,200',
		features: [
			'3 sesiones de terapia de pareja',
			'Acompanamiento de mensajeria durante el proceso',
			'Una llamada de emergencia de 15 minutos'
		],
		highlighted: true,
		checkoutUrl: 'https://buy.stripe.com/00wdR97eJ3TvaGdbbLe7m0E'
	},
	{
		planName: 'Terapia de Pareja',
		planLabel: 'Plan Total',
		price: '$8,000',
		features: [
			'10 sesiones de terapia de pareja',
			'Acompanamiento de mensajeria durante el proceso',
			'Dos llamadas de emergencia de 15 minutos'
		],
		highlighted: false,
		checkoutUrl: 'https://buy.stripe.com/7sYfZheHbdu59C9a7He7m0F'
	}
]

type TabKey = 'personal' | 'parejas'

const PlanesMx = () => {
	const [activeTab, setActiveTab] = useState<TabKey>('personal')

	const plans = activeTab === 'personal' ? [...personalPlans] : [...couplesPlans]
	return (
		<div>
			<section className="px-6 pb-20 md:pb-28">
				<div className="mx-auto max-w-6xl">
					{/* Tab Switcher */}
					<div className="mb-12 flex justify-center">
						<div className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-100 p-1">
							<button
								type="button"
								onClick={() => setActiveTab('personal')}
								className={`flex cursor-pointer items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 ${
									activeTab === 'personal'
										? 'bg-emerald-800 text-stone-50 shadow-sm'
										: 'text-stone-500 hover:text-stone-800'
								}`}
							>
								<User className="h-4 w-4" />
								Individual
							</button>
							<button
								type="button"
								onClick={() => setActiveTab('parejas')}
								className={`flex cursor-pointer items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 ${
									activeTab === 'parejas'
										? 'bg-emerald-800 text-stone-50 shadow-sm'
										: 'text-stone-500 hover:text-stone-800'
								}`}
							>
								<Users className="h-4 w-4" />
								Parejas
							</button>
						</div>
					</div>

					{/* Pricing Cards */}
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{plans.map((plan, i) => (
							<PricingCard
								key={`${activeTab}-${i}`}
								planName={plan.planName}
								planLabel={plan.planLabel}
								price={plan.price}
								features={plan.features}
								highlighted={plan.highlighted}
								checkoutUrl={plan.checkoutUrl}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default PlanesMx
