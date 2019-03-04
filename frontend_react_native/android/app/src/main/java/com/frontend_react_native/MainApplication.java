package com.frontend_react_native;

import android.app.Application;

import com.facebook.react.ReactApplication;
<<<<<<< HEAD
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
=======
import com.airbnb.android.react.maps.MapsPackage;
>>>>>>> e060b15... installed dependencies for iOS app.
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
<<<<<<< HEAD
            new RNGestureHandlerPackage()
=======
            new MapsPackage()
>>>>>>> e060b15... installed dependencies for iOS app.
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
