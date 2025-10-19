import { VITAL_Node } from './vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#SparqlAskResponse
 */
export class SparqlAskResponse extends VITAL_Node {
  public positiveResponse?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#SparqlAskResponse';
  }

  /**
   * Get property definitions for SparqlAskResponse
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#isPositiveResponse',
        tsPropertyName: 'positiveResponse',
        type: 'boolean',
        required: false
      }
    ];
  }


}
