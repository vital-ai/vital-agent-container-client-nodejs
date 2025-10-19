import { DatabaseConnection } from './databaseConnection';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#SparqlDatabaseConnection
 */
export class SparqlDatabaseConnection extends DatabaseConnection {
  public catalogName?: string;
  public repositoryName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#SparqlDatabaseConnection';
  }

  /**
   * Get property definitions for SparqlDatabaseConnection
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasCatalogName',
        tsPropertyName: 'catalogName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasRepositoryName',
        tsPropertyName: 'repositoryName',
        type: 'string',
        required: false
      }
    ];
  }


}
