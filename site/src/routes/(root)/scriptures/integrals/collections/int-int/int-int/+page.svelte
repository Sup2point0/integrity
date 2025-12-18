<script lang="ts">
  
import Site from "#scripts/utils/site";

import { sync } from "#scripts/utils/sync";

import { onMount } from "svelte";


const S = "-;BB￶>;BBE￶J>;H;\x04￠￠\x128H\x14￠￠\x1F`C￶GK?J;￶?CFH;II;:￶OEK￶<EKD:￶J>?I\x02￶8;97KI;￶?J￶C;7DI￶OEK￶CKIJ￶8;￶GK?J;￶B?A;￶C;￶Ῡ￶;?J>;H￶7D￶;D@EO;H￶E<￶H;7:;H￶CE:;\x02￶EH￶7￶F;HKI;H￶E<￶#7HA:EMD￶ED￶\x1D?J\x1EK8\x04￶\x18EDKI￶FE?DJI￶?<￶OEK`H;￶H;7:?D=￶J>;￶9E:;￶?DIJ;7:￶E<￶J>;￶FH;L?;M\x04￠￠\x128H\x14￠￠\x12IJHED=\x14\x17IIEHJ\x12\x05IJHED=\x14￶?I￶H?F;￶<EH￶;7IJ;H￶;==I￶7D:￶I;9H;JI￶B?A;￶J>?I\x02￶8KJ￶J8>￶\x12IJHED=\x14\x1FDJ;=H?JO\x12\x05IJHED=\x14￶H?L7BI￶?J￶?D￶I?P;\x02￶7D:￶9;HJ7?DBO￶\x1F`:￶I7O￶;N9;;:I￶?J￶?D￶9ECFB;N?JO\x04￶\x17D:￶9ECFB;N?JO￶?I￶L;HO￶;<<;9J?L;￶<EH￶>?:?D=￶I;9H;JI￶Ῡ￶FHEJ;9J?ED￶8O￶E8<KI97J?ED￶Ῡ￶8;97KI;￶?J￶C7A;I￶L?I?JEHI￶B;II￶B?A;BO￶JE￶DEJ?9;￶IJK<<￶EKJ￶E<￶J>;￶EH:?D7HO\x04￠￠\x128H\x14￠￠+D<EHJKD7J;BO￶\x1F￶>7L;￶DEJ>?D=￶CK9>￶E<￶L7BK;￶JE￶H;7BBO￶E<<;H￶>;H;￶7I￶7￶H;M7H:￶<EH￶OEKH￶;NFBEH7J?EDI\x02￶EJ>;H￶J>7D￶7￶>;7HJ<;BJ￶ῲD?9;￶MEHA￶C7J;ῳ￶7D:￶J>7DAI\x04￠￠\x128H\x14￠￠&;H>7FI￶\x1F￶9EKB:￶E<<;H￶?DI?=>JI￶?DJE￶M>E￶\x1F￶7C￶Ῡ￶8KJ￶7J￶J>;￶;D:￶E<￶J>;￶:7O￶J>7J`I￶<7?HBO￶C;7D?D=B;II\x04￶\x17BIE\x02￶7DOJ>?D=￶;IF;9?7BBO￶F;HIED7B￶\x1F`:￶@KIJ￶J>HEM￶ED￶\x12IJHED=\x14\x17IIEHJ\x12\x05IJHED=\x14￶?9B￠￠\x128H\x14￠￠\x1F`C￶JHO?D=￶JE￶H;97BB￶7DOJ>?D=￶\x1F`L;￶H;7:￶M>?9>￶?I￶I?C?B7H￶JE￶M>7J￶\x1F`C￶MH?J?D=￶>;H;\x02￶8KJ￶\x1F`C￶9EC?D=￶KF￶8B7DA\x04￶)KH;BO￶J>;H;￶M7I￶IEC;J>?D=\x15\x15￠￠\x128H\x14￠￠\x1FJ￶<;;BI￶IE￶:?IJ7DJ\x04￶\x1F`C￶IE￶EB:￶DEM\x04￠￠\x128H\x14￠￠*>;￶?:;7￶E<￶>?:?D=￶?D￶7￶M;8I?J;￶?I￶IE￶9EEB￶JE￶C;\x04￶\x17I￶?D\x02￶?J`I￶7BCEIJ￶B?A;￶J>?I￶F;HIED￶?I￶>;H;\x02￶EH￶J>;O￶B;<J￶7￶ID7FI>EJ￶E<￶J>;CI;BL;I\x02￶<HEP;D￶?D￶J?C;￶<EH￶OEK￶JE￶C;;J\x04￶\x1FJ`I￶B?A;￶7D￶7:L;DJKH;￶=7C;\x04￠￠\x128H\x14￠￠\x17￶F7HJ￶E<￶J>7J￶?I￶@KIJ￶9>?B:?I>￶MED:;H\x02￶IFH?DAB;:￶?D￶M?J>￶7￶B?JJB;￶:;I?H;￶JE￶8;￶;:=O\x04￶\x1F￶I7O￶J>?I￶;L;HOM>;H;￶7D:￶7BB￶J>;￶J?C;\x02￶8KJ￶\x1F￶H;7BBO￶>EF;￶\x1F￶:ED`J￶BEI;￶J>7J￶9>?B:￶?D￶C;\x04￠￠\x128H\x14￠￠)EC;J?C;I\x02￶OEK￶IF;D:￶IE￶BED=￶8;?D=￶DEJ￶7￶9>?B:￶J>7J￶OEK￶<EH=;J￶M>7J￶?J`I￶B?A;￶JE￶>7L;￶J>;￶MEHB:￶EF;D\x04￶*E￶>7L;￶OEKH￶C?D:￶KD7<H7?:￶JE￶?C7=?D;￶7D:￶9H;7J;\x04￠￠\x128H\x14￠￠-;￶7H;￶I>7F;:￶7D:￶CEKB:;:￶8O￶J>;￶MEHB:￶7HEKD:￶KI\x02￶7D:￶?J￶8EJ>￶;DH?9>;I￶7D:￶:?BKJ;I￶EKH￶EMD￶;II;D9;\x04￶\x1FJ￶IEC;J?C;I￶<;;BI￶B?A;￶\x1F`L;￶BEIJ￶J>;￶9EBEKH￶7D:￶8H?=>JD;II￶E<￶9>?B:>EE:\x02￶7D:￶\x1F￶>7L;￶DE￶?:;7￶>EM￶JE￶=;J￶?J￶879A\x04￠￠\x128H\x14￠￠*>?I￶?I￶M>O￶\x1F￶BEL;￶7D:￶9>;H?I>￶\x12IJHED=\x14\x17IIEHJ\x12\x05IJHED=\x14￶IE￶CK9>\x04￶\x1FJ`I￶7D￶;J;HD7B￶ID7FI>EJ￶E<￶CO￶JH7DI?J?ED￶<HEC￶9>?B:>EE:￶?DJE￶7:KBJ>EE:\x04￶\x1FJ`I￶7￶J?C;B;II￶H;C?D:;H￶E<￶M>E￶\x1F￶M7I￶7D:￶M>E￶\x1F￶7C\x04￠￠\x128H\x14￠￠#7D￶\x1F`C￶IE￶=B7:￶\x1F￶B;<J￶7BB￶J>EI;￶EB:￶DEJ;I￶<HEC￶CO￶?&7:￶7D:￶?&>ED;￶DEJ￶:;B;J;:\x04￶->;D￶\x1F￶MHEJ;￶J>;C￶\x1F￶E<9￶J>EK=>J￶DEJ>?D=￶E<￶J>;C\x02￶8KJ￶OEK￶BEEA￶879A￶7J￶J>;C\x02￶7D:￶?J￶@KIJ￶J7A;I￶OEK￶879A\x04￶\x1F￶97D￶H;\x03F?9JKH;￶J>;￶7<J;HDEEDI￶7D:￶;L;D?D=I￶IF;DJ￶JOF?D=￶IJK<<￶KF￶<EH￶DE￶ED;￶8KJ￶COI;B<\x04￶\x1CEH￶<KJKH;￶C;\x02￶F;H>7FI\x04￠￠\x128H\x14￠￠%A7OOO\x02￶J>?I￶JKHD;:￶?DJE￶H;<B;9J?L;￶=K<<￶7I￶KIK7B\x04￶#O￶7FEBE=?;I\x04￠￠\x128H\x14￠￠-;BB\x02￶J>;H;￶7H;￶7J￶B;7IJ￶7￶:EP;D￶EJ>;H￶I;9H;JI￶ED￶\x12IJHED=\x14\x1FDJ;=H?JO\x12\x05IJHED=\x14\x02￶7D:￶CEH;￶?<￶OEK`H;￶H;7:?D=￶J>?I\x04￶)E\x02￶>7L;￶<KD￶:?I9EL;H?D=￶J>;C￷￠";


onMount(() => {
  $Site.question.add("d");
  $Site.questions.add("D");
  sync();
});

</script>


<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>


{#each S.split("").map(c => String.fromCharCode(c.charCodeAt(0)+42)).join("").split("<br>") as _}
  <p> {@html _} </p>
{/each}


<style>

p {
  margin: 1em 0;
  font-family: 'Kalam', system-ui, sans-serif;
  font-size: 150%;
}

</style>
