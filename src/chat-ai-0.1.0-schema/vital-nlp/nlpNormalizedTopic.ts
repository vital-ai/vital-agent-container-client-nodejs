import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#NlpNormalizedTopic
 */
export class NlpNormalizedTopic extends VITAL_Node {
  public shortname?: string;
  public heightPx?: number;
  public widthPx?: number;
  public nameVariants?: string;
  public imageDate?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#NlpNormalizedTopic';
  }

  /**
   * Get property definitions for NlpNormalizedTopic
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasShortname',
        tsPropertyName: 'shortname',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasHeightPx',
        tsPropertyName: 'heightPx',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasWidthPx',
        tsPropertyName: 'widthPx',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasNameVariants',
        tsPropertyName: 'nameVariants',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasImageDate',
        tsPropertyName: 'imageDate',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
