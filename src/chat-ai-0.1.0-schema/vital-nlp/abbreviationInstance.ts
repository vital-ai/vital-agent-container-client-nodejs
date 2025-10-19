import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#AbbreviationInstance
 */
export class AbbreviationInstance extends VITAL_Node {
  public shortForm?: string;
  public shortFormEnd?: number;
  public shortFormStart?: number;
  public longFormEnd?: number;
  public longFormStart?: number;
  public longForm?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#AbbreviationInstance';
  }

  /**
   * Get property definitions for AbbreviationInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasShortForm',
        tsPropertyName: 'shortForm',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasShortFormEnd',
        tsPropertyName: 'shortFormEnd',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasShortFormStart',
        tsPropertyName: 'shortFormStart',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasLongFormEnd',
        tsPropertyName: 'longFormEnd',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasLongFormStart',
        tsPropertyName: 'longFormStart',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasLongForm',
        tsPropertyName: 'longForm',
        type: 'string',
        required: false
      }
    ];
  }


}
