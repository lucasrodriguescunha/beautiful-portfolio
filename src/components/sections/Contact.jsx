import { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success', // success | error
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        showToast('Mensagem enviada com sucesso!', 'success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        showToast('Oops! Algo deu errado. Tente novamente.', 'error');
      });
  };

  function showToast(message, type = 'success') {
    setToast({
      show: true,
      message,
      type,
    });

    setTimeout(() => {
      setToast({
        show: false,
        message: '',
        type,
      });
    }, 3000);
  }

  return (
    <section
      id='contact'
      className='min-h-screen flex items-center justify-center py-20'>
      <RevealOnScroll>
        <div className='px-4 w-80'>
          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
            {t('get_in_touch')}
          </h2>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div className='relative'>
              <input
                type='text'
                id='from_name'
                name='from_name'
                required
                value={formData.name}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                placeholder={t('name_placeholder')}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className='relative'>
              <input
                type='email'
                id='email'
                name='email'
                required
                value={formData.email}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                placeholder={t('email_placeholder')}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className='relative'>
              <textarea
                id='message'
                name='message'
                required
                value={formData.message}
                rows={5}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                placeholder={t('message_placeholder')}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]'
            >
              {t('send_message')}
            </button>
          </form>
        </div>
      </RevealOnScroll>
      {toast.show && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-6 py-4 rounded-lg text-white shadow-lg transition-all
          ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
        >
          {toast.message}
        </div>
      )}
    </section>
  );
}