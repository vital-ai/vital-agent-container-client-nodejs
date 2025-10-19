import { VITAL_Node } from './vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#RDFStatement
 */
export class RDFStatement extends VITAL_Node {
  public rdfContext?: string;
  public rdfPredicate?: string;
  public rdfObject?: string;
  public rdfSubject?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#RDFStatement';
  }

  /**
   * Get property definitions for RDFStatement
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasRdfContext',
        tsPropertyName: 'rdfContext',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasRdfPredicate',
        tsPropertyName: 'rdfPredicate',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasRdfObject',
        tsPropertyName: 'rdfObject',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasRdfSubject',
        tsPropertyName: 'rdfSubject',
        type: 'string',
        required: false
      }
    ];
  }


}
