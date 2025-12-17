import { Button } from '@/components/ui/button';
import { useLanguage } from '@/features/common/context/LanguageContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactFormSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t('contact.form.validation.nameMin')),
        email: z.string().email(t('contact.form.validation.emailInvalid')),
        message: z.string().min(10, t('contact.form.validation.messageMin')),
      }),
    [t]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Simula envio de email (você pode integrar com serviços como EmailJS, SendGrid, etc.)
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Dados do formulário:', data);

      toast.success(t('contact.toast.successTitle'), {
        description: t('contact.toast.successDesc'),
      });

      reset();
    } catch {
      toast.error(t('contact.toast.errorTitle'), {
        description: t('contact.toast.errorDesc'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t('contact.titlePrefix')}{' '}
              <span className="gradient-text">{t('contact.titleHighlight')}</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">{t('contact.description')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass rounded-xl p-6">
                <h3 className="font-display text-lg font-semibold mb-4">
                  {t('contact.infoTitle')}
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:joaopedrosalles@hotmail.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t('contact.email')}</p>
                      <p className="font-medium text-foreground">joaopedrosalles@hotmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/joao-pedro-salles-dos-santos-a5358a11a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t('contact.linkedin')}</p>
                      <p className="font-medium text-foreground">
                        /in/joao-pedro-salles-dos-santos-a5358a11a/
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/jaosalles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/20 transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t('contact.github')}</p>
                      <p className="font-medium text-foreground">@jaosalles</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="p-3 rounded-lg bg-secondary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t('contact.location')}</p>
                      <p className="font-medium text-foreground">{t('contact.locationValue')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-xl p-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t('contact.form.nameLabel')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className={`w-full px-4 py-3 rounded-lg bg-secondary/50 border ${
                      errors.name ? 'border-red-500' : 'border-border'
                    } focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors`}
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t('contact.form.emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className={`w-full px-4 py-3 rounded-lg bg-secondary/50 border ${
                      errors.email ? 'border-red-500' : 'border-border'
                    } focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors`}
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t('contact.form.messageLabel')}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className={`w-full px-4 py-3 rounded-lg bg-secondary/50 border ${
                      errors.message ? 'border-red-500' : 'border-border'
                    } focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none`}
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>{t('contact.form.submitSending')}</>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {t('contact.form.submitSend')}
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
