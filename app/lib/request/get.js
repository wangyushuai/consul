import formatURLFactory from 'consul-ui/lib/formatURL';
import $ from 'jquery';
const consulHost = '';
const request = $.ajax;
const formatURL = formatURLFactory();
export default  function(url, dc)
{
  return request(
    formatURL(consulHost + url, dc)
  );
}
