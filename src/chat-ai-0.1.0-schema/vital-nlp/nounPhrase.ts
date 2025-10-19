import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#NounPhrase
 */
export class NounPhrase extends VITAL_Node {
  public startTokenIndex?: number;
  public endTokenIndex?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#NounPhrase';
  }

  /**
   * Get property definitions for NounPhrase
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasStartTokenIndex',
        tsPropertyName: 'startTokenIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasEndTokenIndex',
        tsPropertyName: 'endTokenIndex',
        type: 'number',
        required: false
      }
    ];
  }


}
