export default function Footer() {
    return (
        <footer className="mt-10 bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto text-center py-8">
                <p className="mb-2 text-slate-400">&copy; {new Date().getFullYear()} Chia En, Kaelynn, Luo Qian</p>
                <p className="text-sm text-slate-500 mb-4">HUUMONIA</p>
                <div className="flex justify-center gap-6">

                    <a href="mailto:rphuumonia@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                        <i className="fa fa-envelope text-xl"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=6592355164" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-green-400 transition-colors">
                        <i className="fab fa-whatsapp text-xl"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
