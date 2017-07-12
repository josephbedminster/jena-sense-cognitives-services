using Android.App;
using Android.OS;
using Android.Webkit;

namespace JenaSENSE
{
    [Activity(Label = "LoadFromWeb")]
    public class LoadFromWeb : Activity
    {
        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);

            SetContentView(Resource.Layout.LoadFromWeb);

            Android.Webkit.WebView webView = FindViewById<Android.Webkit.WebView>(Resource.Id.LocalWebView);
            webView.SetWebViewClient(new WebViewClient());

            webView.Settings.JavaScriptEnabled = true;
            webView.LoadUrl("http://52.166.147.209/webview/camera.html");
        }
    }
}