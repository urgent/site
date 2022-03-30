import Document, { Html, Head, Main, NextScript } from "next/document";
import { createRelayDocument } from "relay-nextjs/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const relayDocument = createRelayDocument();

    const renderPage = ctx.renderPage;
    ctx.renderPage = () =>
      renderPage({
        enhanceApp: (App) => relayDocument.enhance(App),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      relayDocument,
    };
  }

  render() {
    const { relayDocument } = this.props as any;

    return (
      <Html>
        <Head>
          <relayDocument.Script />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/images/align3_favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
            window['intercomSettings'] = ({
              api_base: "https://api-iam.intercom.io",
              app_id: "vj22xaue"
            });
          
            // We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/vj22xaue'
            (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/vj22xaue';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
          `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
