var targengate = document.getElementById('targengate');
var ascalan_dist = document.getElementById('ascalan_dist');
var marcher_dist = document.getElementById('marcher_dist');
var ashers_hill = document.getElementById('ashers_hill');
var oakgate = document.getElementById('oakgate');
var balder_dist = document.getElementById('balder_dist');
var redwani_dist = document.getElementById('redwani_dist');
var crowne_dist = document.getElementById('crowne_dist');
var bronze_hill = document.getElementById('bronze_hill');
var mithrilgate = document.getElementById('mithrilgate');
var lantern_dist = document.getElementById('lantern_dist');
var coinflow_dist = document.getElementById('coinflow_dist');
var mariqtown = document.getElementById('mariqtown');
var thalonian_dist = document.getElementById('thalonian_dist');
var shriner_dist = document.getElementById('shriner_dist');
var temple_dist = document.getElementById('temple_dist');
var targenhold = document.getElementById('targenhold');
var hightown = document.getElementById('hightown');
var craftsmen_dist = document.getElementById('craftsmen_dist');
var freemans_dist = document.getElementById('freemans_dist');
var andarien_dist = document.getElementById('andarien_dist');
var valasian_dist = document.getElementById('valasian_dist');
var the_narrows = document.getElementById('the_narrows');
var lower_commons = document.getElementById('lower_commons');
var upper_commons = document.getElementById('upper_commons');
var greater_canden = document.getElementById('greater_canden');
var lesser_canden = document.getElementById('lesser_canden');
var gennmere_dist = document.getElementById('gennmere_dist');
var graver_hill = document.getElementById('graver_hill');
var durner_dist = document.getElementById('durner_dist');
var greenfallen_dist = document.getElementById('greenfallen_dist');
var irongate = document.getElementById('irongate');
var golden_oak_hill = document.getElementById('golden_oak_hill');
var dirktown_slums = document.getElementById('dirktown_slums');
var smogtown = document.getElementById('smogtown');
var farwater_slums = document.getElementById('farwater_slums');
var veshauper_isles = document.getElementById('veshauper_isles');
var gendron_fields = document.getElementById('gendron_fields');
var swinstead = document.getElementById('swinstead');
var pagle_fields = document.getElementById('pagle_fields');
var irontown = document.getElementById('irontown');
var laker_fields = document.getElementById('laker_fields');
var laketown = document.getElementById('laketown');
var malmstown = document.getElementById('malmstown');
var harker_fields = document.getElementById('harker_fields');
var jeffson_fields = document.getElementById('jeffson_fields');
var stillgrain_fields = document.getElementById('stillgrain_fields');
var jons_fields = document.getElementById('jons_fields');
var fentick_fields = document.getElementById('fentick_fields');
var darrowtown = document.getElementById('darrowtown');
var glen_hill = document.getElementById('glen_hill');
var highcrowe_fields = document.getElementById('highcrowe_fields');
var breytown = document.getElementById('breytown');
var breywood_forest = document.getElementById('breywood_forest');
var suttwine_fields = document.getElementById('suttwine_fields');
var west_mudwreck = document.getElementById('west_mudwreck');
var east_mudwreck = document.getElementById('east_mudwreck');
var applewine_hill = document.getElementById('applewine_hill');
var kintown = document.getElementById('kintown');
var gledstone_fields = document.getElementById('gledstone_fields');
var morn_isle_deadmans_rock = document.getElementById('morn_isle_deadmans_rock');
var old_mans_rock = document.getElementById('old_mans_rock');

window.onload = getcol()

function getcol(){
targengate.style.fill = localStorage.getItem('targengate_color');
ascalan_dist.style.fill = localStorage.getItem('ascalan_dist_color');
marcher_dist.style.fill = localStorage.getItem('marcher_dist_color');
ashers_hill.style.fill = localStorage.getItem('ashers_hill_color');
oakgate.style.fill = localStorage.getItem('oakgate_color');
balder_dist.style.fill = localStorage.getItem('balder_dist_color');
redwani_dist.style.fill = localStorage.getItem('redwani_dist_color');
crowne_dist.style.fill = localStorage.getItem('crowne_dist_color');
bronze_hill.style.fill = localStorage.getItem('bronze_hill_color');
mithrilgate.style.fill = localStorage.getItem('mithrilgate_color');
lantern_dist.style.fill = localStorage.getItem('lantern_dist_color');
coinflow_dist.style.fill = localStorage.getItem('coinflow_dist_color');
mariqtown.style.fill = localStorage.getItem('mariqtown_color');
thalonian_dist.style.fill = localStorage.getItem('thalonian_dist_color');
shriner_dist.style.fill = localStorage.getItem('shriner_dist_color');
temple_dist.style.fill = localStorage.getItem('temple_dist_color');
targenhold.style.fill = localStorage.getItem('targenhold_color');
hightown.style.fill = localStorage.getItem('hightown_color');
craftsmen_dist.style.fill = localStorage.getItem('craftsmen_dist_color');
freemans_dist.style.fill = localStorage.getItem('freemans_dist_color');
andarien_dist.style.fill = localStorage.getItem('andarien_dist_color');
valasian_dist.style.fill = localStorage.getItem('valasian_dist_color');
the_narrows.style.fill = localStorage.getItem('the_narrows_color');
lower_commons.style.fill = localStorage.getItem('lower_commons_color');
upper_commons.style.fill = localStorage.getItem('upper_commons_color');
greater_canden.style.fill = localStorage.getItem('greater_canden_color');
lesser_canden.style.fill = localStorage.getItem('lesser_canden_color');
gennmere_dist.style.fill = localStorage.getItem('gennmere_dist_color');
graver_hill.style.fill = localStorage.getItem('graver_hill_color');
durner_dist.style.fill = localStorage.getItem('durner_dist_color');
greenfallen_dist.style.fill = localStorage.getItem('greenfallen_dist_color');
irongate.style.fill = localStorage.getItem('irongate_color');
golden_oak_hill.style.fill = localStorage.getItem('golden_oak_hill_color');
dirktown_slums.style.fill = localStorage.getItem('dirktown_slums_color');
smogtown.style.fill = localStorage.getItem('smogtown_color');
farwater_slums.style.fill = localStorage.getItem('farwater_slums_color');
veshauper_isles.style.fill = localStorage.getItem('veshauper_isles_color');
gendron_fields.style.fill = localStorage.getItem('gendron_fields_color');
swinstead.style.fill = localStorage.getItem('swinstead_color');
pagle_fields.style.fill = localStorage.getItem('pagle_fields_color');
irontown.style.fill = localStorage.getItem('irontown_color');
laker_fields.style.fill = localStorage.getItem('laker_fields_color');
laketown.style.fill = localStorage.getItem('laketown_color');
malmstown.style.fill = localStorage.getItem('malmstown_color');
harker_fields.style.fill = localStorage.getItem('harker_fields_color');
jeffson_fields.style.fill = localStorage.getItem('jeffson_fields_color');
stillgrain_fields.style.fill = localStorage.getItem('stillgrain_fields_color');
jons_fields.style.fill = localStorage.getItem('jons_fields_color');
fentick_fields.style.fill = localStorage.getItem('fentick_fields_color');
darrowtown.style.fill = localStorage.getItem('darrowtown_color');
glen_hill.style.fill = localStorage.getItem('glen_hill_color');
highcrowe_fields.style.fill = localStorage.getItem('highcrowe_fields_color');
breytown.style.fill = localStorage.getItem('breytown_color');
breywood_forest.style.fill = localStorage.getItem('breywood_forest_color');
suttwine_fields.style.fill = localStorage.getItem('suttwine_fields_color');
west_mudwreck.style.fill = localStorage.getItem('west_mudwreck_color');
east_mudwreck.style.fill = localStorage.getItem('east_mudwreck_color');
applewine_hill.style.fill = localStorage.getItem('applewine_hill_color');
kintown.style.fill = localStorage.getItem('kintown_color');
gledstone_fields.style.fill = localStorage.getItem('gledstone_fields_color');
morn_isle_deadmans_rock.style.fill = localStorage.getItem('morn_isle_deadmans_rock_color');
old_mans_rock.style.fill = localStorage.getItem('old_mans_rock_color');

};