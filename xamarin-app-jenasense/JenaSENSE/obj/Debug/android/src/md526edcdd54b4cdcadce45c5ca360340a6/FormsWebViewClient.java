package md526edcdd54b4cdcadce45c5ca360340a6;


public class FormsWebViewClient
	extends android.webkit.WebViewClient
	implements
		mono.android.IGCUserPeer
{
/** @hide */
	public static final String __md_methods;
	static {
		__md_methods = 
			"n_onReceivedHttpError:(Landroid/webkit/WebView;Landroid/webkit/WebResourceRequest;Landroid/webkit/WebResourceResponse;)V:GetOnReceivedHttpError_Landroid_webkit_WebView_Landroid_webkit_WebResourceRequest_Landroid_webkit_WebResourceResponse_Handler\n" +
			"n_onPageStarted:(Landroid/webkit/WebView;Ljava/lang/String;Landroid/graphics/Bitmap;)V:GetOnPageStarted_Landroid_webkit_WebView_Ljava_lang_String_Landroid_graphics_Bitmap_Handler\n" +
			"n_onPageFinished:(Landroid/webkit/WebView;Ljava/lang/String;)V:GetOnPageFinished_Landroid_webkit_WebView_Ljava_lang_String_Handler\n" +
			"";
		mono.android.Runtime.register ("Xam.Plugin.Droid.Extras.FormsWebViewClient, WebView.Plugin.Droid, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null", FormsWebViewClient.class, __md_methods);
	}


	public FormsWebViewClient () throws java.lang.Throwable
	{
		super ();
		if (getClass () == FormsWebViewClient.class)
			mono.android.TypeManager.Activate ("Xam.Plugin.Droid.Extras.FormsWebViewClient, WebView.Plugin.Droid, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null", "", this, new java.lang.Object[] {  });
	}


	public void onReceivedHttpError (android.webkit.WebView p0, android.webkit.WebResourceRequest p1, android.webkit.WebResourceResponse p2)
	{
		n_onReceivedHttpError (p0, p1, p2);
	}

	private native void n_onReceivedHttpError (android.webkit.WebView p0, android.webkit.WebResourceRequest p1, android.webkit.WebResourceResponse p2);


	public void onPageStarted (android.webkit.WebView p0, java.lang.String p1, android.graphics.Bitmap p2)
	{
		n_onPageStarted (p0, p1, p2);
	}

	private native void n_onPageStarted (android.webkit.WebView p0, java.lang.String p1, android.graphics.Bitmap p2);


	public void onPageFinished (android.webkit.WebView p0, java.lang.String p1)
	{
		n_onPageFinished (p0, p1);
	}

	private native void n_onPageFinished (android.webkit.WebView p0, java.lang.String p1);

	private java.util.ArrayList refList;
	public void monodroidAddReference (java.lang.Object obj)
	{
		if (refList == null)
			refList = new java.util.ArrayList ();
		refList.add (obj);
	}

	public void monodroidClearReferences ()
	{
		if (refList != null)
			refList.clear ();
	}
}
