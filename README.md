We tested several source separation methods on a dataset of synthesized Bach chorales and on choral recordings from [Choral Singing Dataset](https://zenodo.org/record/1286570). Below are listening examples for each of the methods we tested. The code used to create the chorales dataset is available in the ANONYMIZED repository.


The following listening examples are from chorale BWV 360 (chorale number 350 in the Riemenschneider edition). The chorale's original score is available [here](http://www.bach-chorales.com/BWV0360.htm). After running our data augmentation procedure, the chorale was modified with simulated breaths and randomly omitted notes. The modified score is available here (TODO).

## Baseline: Score-informed NMF

As a baseline, we have implemented the score-informed NMF (SI-NMF) technique described in this paper ([PDF](https://qmro.qmul.ac.uk/xmlui/bitstream/handle/123456789/12175/Ewert Using score-informed constraints for NMF-based source separation 2012 Accepted.pdf)):
> Ewert, S., & Müller, M. (2012). Using score-informed constraints for NMF-based source separation. In _2012 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)_ (pp. 129-132).

Our Python implementation is available in the ANONYMIZED repository.
We ran several experiments to select the best parameters for SI-NMF. Results for the best experiment are shown below.

<table>
    <tr>
        <th>
            <div class="button" data-target="audio/reference/mix.wav.m4a">
                {% octicon play %}
            </div>
            mix
        </th>
        <th>soprano</th>
        <th>alto</th>
        <th>tenor</th>
        <th>bass</th>
    </tr>
    <tr>
        <td>reference</td>
        <td>
            <div class="button" data-target="audio/reference/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/reference/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/reference/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/reference/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td>SI-NMF</td>
        <td>
            <div class="button" data-target="audio/ex1/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex1/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex1/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex1/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td colspan="5">
        <audio controls preload="auto"></audio>
        </td>
    </tr>
</table>

## Wave-U-Net

We evaluated a deep learning separation technique called Wave-U-Net on our dataset. Wave-U-Net is described in the following paper ([arXiv](https://arxiv.org/abs/1806.03185)):
> Stoller, D., Ewert, S., & Dixon, S. (2018). Wave-U-Net: A multi-scale neural network for end-to-end audio source separation. In _Proceedings of the International Society for Music Information Retrieval Conference (ISMIR)_ (pp. 334–40).

Experiments 2--3 tested extracting all four voices from mixtures of all four voices. Experiment 2 used one model to extract all voices, and Experiment 3 used one model per voice.

<table>
    <tr>
        <th>
            <div class="button" data-target="audio/reference/mix.wav.m4a">
                {% octicon play %}
            </div>
            mix
        </th>
        <th>soprano</th>
        <th>alto</th>
        <th>tenor</th>
        <th>bass</th>
    </tr>
    <tr>
        <td>reference</td>
        <td>
            <div class="button" data-target="audio/reference/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/reference/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/reference/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/reference/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td>Ex. 2</td>
        <td>
            <div class="button" data-target="audio/ex2/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex2/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex2/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex2/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td>Ex. 3</td>
        <td>
            <div class="button" data-target="audio/ex3/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex3/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex3/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex3/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td colspan="5">
        <audio controls preload="auto"></audio>
        </td>
    </tr>
</table>

## Score-informed Wave-U-Net

We created a variant of Wave-U-Net that is conditioned on the musical score. Our code is available in the ANONYMIZED repository. We experiment with different score representations and conditioning locations.

Experiments 4--6 compared 4 score representations (normalized pitch, pitch and amplitude, piano roll, and pure tone) and 3 score conditioning locations (input, output, and input-output) -- a total of 12 configurations in each experiment. Each experiments used a different model type:
 * Experiment 4: one model for all voices
 * Experiment 5: one model per voice
 * Experiment 6: multi-source training (single model that separate any of the four voices guided only by the score)

<!--
### Effect of adding the score

The following compares results 

<table>
    <tr>
        <th>
            <div class="button" data-target="audio/reference/mix.wav.m4a">
                {% octicon play %}
            </div>
            mix
        </th>
        <th>soprano</th>
        <th>alto</th>
        <th>tenor</th>
        <th>bass</th>
    </tr>
    <tr>
        <td>reference</td>
        <td>
            <div class="button" data-target="audio/reference/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/reference/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/reference/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/reference/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td>Ex. 6</td>
        <td>
            <div class="button" data-target="audio/wave-u-net/6_midi norm_extract_single/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/wave-u-net/6_midi norm_extract_single/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/wave-u-net/6_midi norm_extract_single/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/wave-u-net/6_midi norm_extract_single/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td>Ex. 7</td>
        <td>
            <div class="button" data-target="audio/wave-u-net/7_multi_source/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/wave-u-net/7_multi_source/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/wave-u-net/7_multi_source/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/wave-u-net/7_multi_source/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td colspan="5">
        <audio controls preload="auto"></audio>
        </td>
    </tr>
</table>
-->


### Comparison of score conditioning methods


#### Experiment 4

<table>
    <tr>
        <th colspan="2">
            <div class="button" data-target="audio/reference/mix.wav.m4a">
                {% octicon play %}
            </div>
            mix
        </th>
        <th>soprano</th>
        <th>alto</th>
        <th>tenor</th>
        <th>bass</th>
    </tr>
    <tr>
        <td colspan="2">reference</td>
        <td>
            <div class="button" data-target="audio/reference/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/reference/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/reference/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/reference/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <th>
            score type
        </th>
        <th style="width: 10px">
            conditioning location
        </th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <!-- normalized pitch -->
    <tr>
        <td rowspan="3" style="width: 10px">normalized pitch</td>
        <td>input</td>
        <td>
            <div class="button" data-target="audio/ex4/midi norm/in/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/midi norm/in/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/midi norm/in/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/midi norm/in/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td>output</td>
        <td>
            <div class="button" data-target="audio/ex4/midi norm/out/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/midi norm/out/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/midi norm/out/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/midi norm/out/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td>input-output</td>
        <td>
            <div class="button" data-target="audio/ex4/midi norm/in-out/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/midi norm/in-out/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/midi norm/in-out/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/midi norm/in-out/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <!-- pitch and amplitude -->
    <tr>
        <td rowspan="3" style="width: 10px">pitch and amplitude</td>
        <td>input</td>
        <td>
            <div class="button" data-target="audio/ex4/pitch and amplitude/in/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/pitch and amplitude/in/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/pitch and amplitude/in/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/pitch and amplitude/in/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td>output</td>
        <td>
            <div class="button" data-target="audio/ex4/pitch and amplitude/out/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/pitch and amplitude/out/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/pitch and amplitude/out/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/pitch and amplitude/out/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td>input-output</td>
        <td>
            <div class="button" data-target="audio/ex4/pitch and amplitude/in-out/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/pitch and amplitude/in-out/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/pitch and amplitude/in-out/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/pitch and amplitude/in-out/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <!-- piano roll -->
    <tr>
        <td rowspan="3" style="width: 10px">piano roll</td>
        <td>input</td>
        <td>
            <div class="button" data-target="audio/ex4/one-hot/in/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/one-hot/in/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/one-hot/in/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/one-hot/in/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td>output</td>
        <td>
            <div class="button" data-target="audio/ex4/one-hot/out/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/one-hot/out/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/one-hot/out/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/one-hot/out/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td>input-output</td>
        <td>
            <div class="button" data-target="audio/ex4/one-hot/in-out/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/one-hot/in-out/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/one-hot/in-out/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/one-hot/in-out/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <!-- pure tone -->
    <tr>
        <td rowspan="3" style="width: 10px">pure tone</td>
        <td>input</td>
        <td>
            <div class="button" data-target="audio/ex4/pure tone synth/in/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/pure tone synth/in/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/pure tone synth/in/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/pure tone synth/in/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td>output</td>
        <td>
            <div class="button" data-target="audio/ex4/pure tone synth/out/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/pure tone synth/out/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/pure tone synth/out/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/pure tone synth/out/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td>input-output</td>
        <td>
            <div class="button" data-target="audio/ex4/pure tone synth/in-out/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/pure tone synth/in-out/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/pure tone synth/in-out/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex4/pure tone synth/in-out/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td colspan="6">
        <audio controls preload="auto"></audio>
        </td>
    </tr>
</table>


#### Experiment 5

For tenor, which is the most challenging to separate, all score types were tested. For the other voices, only the score types that performed best on tenor were tested.

<table>
    <tr>
        <th colspan="2">
            <div class="button" data-target="audio/reference/mix.wav.m4a">
                {% octicon play %}
            </div>
            mix
        </th>
        <th>soprano</th>
        <th>alto</th>
        <th>tenor</th>
        <th>bass</th>
    </tr>
    <tr>
        <td colspan="2">reference</td>
        <td>
            <div class="button" data-target="audio/reference/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/reference/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/reference/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/reference/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <th>
            score type
        </th>
        <th style="width: 10px">
            conditioning location
        </th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <!-- normalized pitch -->
    <tr>
        <td rowspan="3" style="width: 10px">normalized pitch</td>
        <td>input</td>
        <td></td>
        <td></td>
        <td>
            <div class="button" data-target="audio/ex5/midi norm/in/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td></td>
    </tr>
    <tr>
        <td>output</td>
        <td></td>
        <td></td>
        <td>
            <div class="button" data-target="audio/ex5/midi norm/out/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td></td>
    </tr>
    <tr>
        <td>input-output</td>
        <td></td>
        <td></td>
        <td>
            <div class="button" data-target="audio/ex5/midi norm/in-out/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td></td>
    </tr>
    <!-- pitch and amplitude -->
    <tr>
        <td rowspan="3" style="width: 10px">pitch and amplitude</td>
        <td>input</td>
        <td>
            <div class="button" data-target="audio/ex5/pitch and amplitude/in/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex5/pitch and amplitude/in/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex5/pitch and amplitude/in/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex5/pitch and amplitude/in/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td>output</td>
        <td></td>
        <td></td>
        <td>
            <div class="button" data-target="audio/ex5/pitch and amplitude/out/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td></td>
    </tr>
    <tr>
        <td>input-output</td>
        <td></td>
        <td></td>
        <td>
            <div class="button" data-target="audio/ex5/pitch and amplitude/in-out/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td></td>
    </tr>
    <!-- piano roll -->
    <tr>
        <td rowspan="3" style="width: 10px">piano roll</td>
        <td>input</td>
        <td></td>
        <td></td>
        <td>
            <div class="button" data-target="audio/ex5/one-hot/in/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td></td>
    </tr>
    <tr>
        <td>output</td>
        <td></td>
        <td></td>
        <td>
            <div class="button" data-target="audio/ex5/one-hot/out/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td></td>
    </tr>
    <tr>
        <td>input-output</td>
        <td></td>
        <td></td>
        <td>
            <div class="button" data-target="audio/ex5/one-hot/in-out/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td></td>
    </tr>
    <!-- pure tone -->
    <tr>
        <td rowspan="3" style="width: 10px">pure tone</td>
        <td>input</td>
        <td>
            <div class="button" data-target="audio/ex5/pure tone synth/in/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex5/pure tone synth/in/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex5/pure tone synth/in/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex5/pure tone synth/in/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td>output</td>
        <td></td>
        <td></td>
        <td>
            <div class="button" data-target="audio/ex5/pure tone synth/out/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td></td>
    </tr>
    <tr>
        <td>input-output</td>
        <td></td>
        <td></td>
        <td>
            <div class="button" data-target="audio/ex5/pure tone synth/in-out/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td></td>
    </tr>
    <tr>
        <td colspan="6">
        <audio controls preload="auto"></audio>
        </td>
    </tr>
</table>


#### Experiment 6

In this experiment, the _output_ conditioning location failed to train, so results are only shown for _input_ and _input-output_.

<table>
    <tr>
        <th colspan="2">
            <div class="button" data-target="audio/reference/mix.wav.m4a">
                {% octicon play %}
            </div>
            mix
        </th>
        <th>soprano</th>
        <th>alto</th>
        <th>tenor</th>
        <th>bass</th>
    </tr>
    <tr>
        <td colspan="2">reference</td>
        <td>
            <div class="button" data-target="audio/reference/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/reference/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/reference/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/reference/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <th>
            score type
        </th>
        <th style="width: 10px">
            conditioning location
        </th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <!-- normalized pitch -->
    <tr>
        <td rowspan="2" style="width: 10px">normalized pitch</td>
        <td>input</td>
        <td>
            <div class="button" data-target="audio/ex6/midi norm/in/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/midi norm/in/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/midi norm/in/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/midi norm/in/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td>input-output</td>
        <td>
            <div class="button" data-target="audio/ex6/midi norm/in-out/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/midi norm/in-out/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/midi norm/in-out/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/midi norm/in-out/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <!-- pitch and amplitude -->
    <tr>
        <td rowspan="2" style="width: 10px">pitch and amplitude</td>
        <td>input</td>
        <td>
            <div class="button" data-target="audio/ex6/pitch and amplitude/in/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/pitch and amplitude/in/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/pitch and amplitude/in/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/pitch and amplitude/in/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td>input-output</td>
        <td>
            <div class="button" data-target="audio/ex6/pitch and amplitude/in-out/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/pitch and amplitude/in-out/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/pitch and amplitude/in-out/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/pitch and amplitude/in-out/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <!-- piano roll -->
    <tr>
        <td rowspan="2" style="width: 10px">piano roll</td>
        <td>input</td>
        <td>
            <div class="button" data-target="audio/ex6/one-hot/in/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/one-hot/in/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/one-hot/in/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/one-hot/in/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td>input-output</td>
        <td>
            <div class="button" data-target="audio/ex6/one-hot/in-out/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/one-hot/in-out/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/one-hot/in-out/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/one-hot/in-out/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <!-- pure tone -->
    <tr>
        <td rowspan="2" style="width: 10px">pure tone</td>
        <td>input</td>
        <td>
            <div class="button" data-target="audio/ex6/pure tone synth/in/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/pure tone synth/in/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/pure tone synth/in/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/pure tone synth/in/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td>input-output</td>
        <td>
            <div class="button" data-target="audio/ex6/pure tone synth/in-out/soprano.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/pure tone synth/in-out/alto.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/pure tone synth/in-out/tenor.wav.m4a">
                {% octicon play %}
            </div>
        </td>
        <td>
            <div class="button" data-target="audio/ex6/pure tone synth/in-out/bass.wav.m4a">
                {% octicon play %}
            </div>
        </td>
    </tr>
    <tr>
        <td colspan="6">
        <audio controls preload="auto"></audio>
        </td>
    </tr>
</table>

<!-- 
## Download 

A zip file containing all listening examples in original quality can be downloaded [here](https://drive.google.com/file/d/14vBHA76X1uFXSIzDmwlTCtAnaIVmmgoR/view?usp=sharing) (382 MB). -->
