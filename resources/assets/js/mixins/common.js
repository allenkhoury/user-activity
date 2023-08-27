var Common = {

    filters: {
        dateFormat: function (value) {
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            var compiled  = new Date(value);
            return compiled.toLocaleString("en-GB");
        },
    },
}

export default Common;