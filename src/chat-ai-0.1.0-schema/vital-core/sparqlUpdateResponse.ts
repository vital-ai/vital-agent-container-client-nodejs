import { VITAL_Node } from './vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#SparqlUpdateResponse
 */
export class SparqlUpdateResponse extends VITAL_Node {
  public updatedTriplesCount?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#SparqlUpdateResponse';
  }

  /**
   * Get property definitions for SparqlUpdateResponse
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasUpdatedTriplesCount',
        tsPropertyName: 'updatedTriplesCount',
        type: 'number',
        required: false
      }
    ];
  }


}
