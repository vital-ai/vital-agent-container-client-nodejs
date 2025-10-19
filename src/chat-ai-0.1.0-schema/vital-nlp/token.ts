import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#Token
 */
export class Token extends VITAL_Node {
  public startPosition?: number;
  public tokenText?: string;
  public endPosition?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#Token';
  }

  /**
   * Get property definitions for Token
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasStartPosition',
        tsPropertyName: 'startPosition',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTokenText',
        tsPropertyName: 'tokenText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasEndPosition',
        tsPropertyName: 'endPosition',
        type: 'number',
        required: false
      }
    ];
  }


}
