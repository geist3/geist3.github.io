function HDPICanvas_DOM_GetGraphicsContext()
{
	return g_CurrentGraphics;
}

// Returns the device pixel scale (device pixel ratio / browser canvas backing store pixel ratio)
function HDPICanvas_DOM_GetPixelScale()
{
	var graphicsContext = HDPICanvas_DOM_GetGraphicsContext();
	var pixelRatio = window.devicePixelRatio || 1;
	var backStoreRatio = (graphicsContext.webkitBackingStorePixelRatio || graphicsContext.mozBackingStorePixelRatio || graphicsContext.msBackingStorePixelRatio ||
						  graphicsContext.oBackingStorePixelRatio || graphicsContext.backingStorePixelRatio || 1);
	return pixelRatio / backStoreRatio;
}

// Sets the size of the canvas DOM element to the given values
function HDPICanvas_DOM_Scale(targetWidth, targetHeight)
{
	// If the pixel ratio is not equal to 1, we will need to scale back the canvas DOM element to account for us scaling it up by said ratio
	var pixelScale = HDPICanvas_DOM_GetPixelScale();
	if(pixelScale != 1)
	{
		canvas.style.width = (targetWidth) + "px";
		canvas.style.height = (targetHeight) + "px";
	}
	else
	{
		canvas.style.width = "";
		canvas.style.height = "";
	}
	
	// Update canvas scale
	var graphicsContext = HDPICanvas_DOM_GetGraphicsContext();
	if(typeof graphicsContext.scale === "function")
		graphicsContext.scale(pixelScale, pixelScale);
}
